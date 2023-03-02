import Pino, { Logger, multistream, transport } from 'pino';
import { LoggerOptions, destination } from 'pino';
import { trace, context } from '@opentelemetry/api';
import * as fs from 'fs';

export const loggerOptions: LoggerOptions = {
    level: 'info',
    transport: {
        targets:[{
            level:"info",
            target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: "pid,hostname,context,req,res,responseTime,trace_id,span_id,trace_flags",
            messageFormat: '\{"trace_id":"{trace_id}","spanId":"{span_id}","message":"{msg}"\}'
        }
        },
        {
            level:"info",
            target: 'pino-pretty',
            options: {
                colorize: false,
                ignore: "pid,hostname,context,req,res,responseTime,trace_id,span_id,trace_flags",
                messageFormat: '\{"traceId":"{trace_id}","spanId":"{span_id}","message":"{msg}","serviceName": "sampleNestJsApp"\}',
                destination: '/Users/nityanandagohain/projects/signoz/deploy/docker/clickhouse-setup/log.log'
            }
        },
    
        ],
        
    }
};



export const logger: Logger = Pino(
    loggerOptions,
);