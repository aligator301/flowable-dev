export const i18NSupportedLanguages = [
    'en'
];


export const i18nMessageBuilder = (template : String, page : String) => {
    return async ({locale}) => {
        let supported = i18NSupportedLanguages.filter(value => {
            return locale.toLowerCase() === value.toLowerCase();
        });

        let localeFile = supported?locale:'en';

        let templateMessage = (await import(`../i18n/${template}/${localeFile}.json`)).default
        let pageMessages = (await import(`../i18n/${page}/${localeFile}.json`)).default

        return {
            props: {
                // You can get the messages from anywhere you like. The recommended
                // pattern is to put them in JSON files separated by language and read
                // the desired one based on the `locale` received from Next.js.
                messages: {
                    ...templateMessage,
                    ...pageMessages
                }
            }
        };
    }
}
