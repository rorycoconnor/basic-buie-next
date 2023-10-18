// import * as React from 'react';
'use client'
import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';
import messages from 'box-ui-elements/i18n/en-US';
const access_token = 'dr9oslIbQviHwAez5GuSHuSuWK3dzwlY'

// Importing css related to the content explorer. More can be seen under the dist folder.
import 'box-ui-elements/dist/explorer.css';


export default function ContExplorer() {
    return (
        <ContentExplorer
            token={access_token}
            language={'en-us'}
            messages={messages}
        />

    )
}