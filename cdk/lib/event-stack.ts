import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {resourceName} from './const'

export class EventStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = cdk.aws_s3.Bucket.fromBucketName(this, 'bucket', resourceName)

    const sqs = new cdk.aws_sqs.Queue(this, 'queue',{queueName: resourceName})

    const suffixes = ['.txt', '.TXT'];
    suffixes.forEach(suffix => {
        bucket.addEventNotification(
            cdk.aws_s3.EventType.OBJECT_CREATED,
            new cdk.aws_s3_notifications.SqsDestination(sqs),
            {
                prefix: "test/",
                suffix: suffix,
            }
        )
    })
  }
}
