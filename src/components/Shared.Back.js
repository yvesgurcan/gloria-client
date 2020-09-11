import React from 'react';
import { Link } from 'react-router-dom';

export default ({ to = '/' }) => to && <Link to={to}>Back</Link>;
