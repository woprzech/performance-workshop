function formatMessage(level: string, text: string, object?: any) {
    // const getNamespace = require('continuation-local-storage').getNamespace;
    // const myRequest = getNamespace('my request');
    // const correlationId = myRequest && myRequest.get('correlationID') ? myRequest.get('correlationID') : '';
    console.log(`${level} ${text}`, ...object || '');
}


export namespace Logger {
    export function info(text: string, ...object: any[]) {
        formatMessage('[INFO]', text, object);
    }

    export function debug(text: string, ...args: any[]) {
        formatMessage('[DEBUG]', text, args);
    }

    export function error(text: string, error?: any) {
        formatMessage('[ERROR]', text, error);
    }
}
