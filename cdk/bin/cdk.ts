#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3Stack } from '../lib/s3-stack';
import { EventStack } from '../lib/event-stack';
import { RemoveSkipDestinationValidationAspect } from '../lib/Aspect'

const app = new cdk.App();
const s3Stack = new S3Stack(app, 'S3Stack', {});
const eventStack = new EventStack(app, 'EventStack', {})
eventStack.addDependency(s3Stack);

// SkipDestinationValidationを削除
cdk.Aspects.of(eventStack).add(new RemoveSkipDestinationValidationAspect());