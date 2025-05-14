import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {resourceName} from './const'

export class S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new cdk.aws_s3.Bucket(this, 'bucket',{
        bucketName: resourceName,
        removalPolicy: cdk.RemovalPolicy.DESTROY
    })

  }
}
