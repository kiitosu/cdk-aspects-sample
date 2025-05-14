#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3Stack } from '../lib/s3-stack';
import { EventStack } from '../lib/event-stack';

const app = new cdk.App();
const s3Stack = new S3Stack(app, 'S3Stack', {});
new EventStack(app, 'EventStack', {}).addDependency(s3Stack);