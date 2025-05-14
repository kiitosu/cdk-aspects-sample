import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new cdk.aws_s3.Bucket(this, 'bucket',{removalPolicy: cdk.RemovalPolicy.DESTROY})

    const sqs = new cdk.aws_sqs.Queue(this, 'queue')

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
