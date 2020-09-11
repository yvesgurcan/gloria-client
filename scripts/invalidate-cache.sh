CLOUDFRONT_DISTRIBUTION_ID="E3G41PDQ01SVNY"

echo ""
echo "Invalidating cache:"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/"