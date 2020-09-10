#!/bin/bash  
set -e

CLOUDFRONT_DISTRIBUTION_ID="E3G41PDQ01SVNY"
BUCKET_NAME="gloria.twentyfour7.com"
BUCKET="s3://$BUCKET_NAME"
BACKUP_BUCKET="s3://$BUCKET_NAME.backup"
LOCAL_BUILD="./build"
TEMP_FOLDER="tmp"
NOW=`date '+%Y-%m-%d_%H:%M:%S'`

echo ""
echo "Timestamp: $NOW"
echo "Target bucket: $BUCKET"
echo "Backup Bucket: $BACKUP_BUCKET"
echo "Local relative build location: $LOCAL_BUILD"
echo "CloudFront Distribution ID: $CLOUDFRONT_DISTRIBUTION_ID"
echo ""

if [ -z "$(ls -A $LOCAL_BUILD)" ]; then
    echo "WARNING: $LOCAL_BUILD is empty."
    ls -A $LOCAL_BUILD
    echo "Running this script will delete the entire content of $BUCKET. Do you want to continue? [NO/yes]"

    read CONFIRM_DELETE

    if ! [[ $CONFIRM_DELETE == "yes" ]]; then
        echo "Script aborted."
        echo ""
        exit 1
    fi
else
    echo "Local build found."
fi

if ! [[ $CONFIRM_DELETE == "yes" ]]; then
    echo ""
    echo "Uploading local build from $LOCAL_BUILD to $BUCKET/$TEMP_FOLDER:"
    aws s3 cp $LOCAL_BUILD $BUCKET/$TEMP_FOLDER --exclude "*/.DS_Store" --recursive

    echo ""
    echo "Content of $BUCKET:"
    aws s3 ls $BUCKET
fi

echo ""
echo "Deleting last build (if any):"
aws s3 rm $BUCKET --exclude "$TEMP_FOLDER/*" --recursive

if ! [[ $CONFIRM_DELETE == "yes" ]]; then
    echo ""
    echo "Moving uploaded build to root and grant public read access:"
    aws s3 mv $BUCKET/$TEMP_FOLDER/ $BUCKET --recursive --acl public-read
fi

echo ""
echo "Content of $BUCKET:"
aws s3 ls $BUCKET

echo ""
echo "Build successfully uploaded."
echo ""

echo ""
echo "Invalidating cache:"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/"

echo "Backing up content of $BUCKET into $BACKUP_BUCKET:"
aws s3 cp $BUCKET $BACKUP_BUCKET/$NOW --recursive

echo ""
echo "Content of $BACKUP_BUCKET:"
aws s3 ls $BACKUP_BUCKET

echo ""