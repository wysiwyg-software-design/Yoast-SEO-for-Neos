import manifest from '@neos-project/neos-ui-extensibility';

import {reducer} from './actions';
import YoastInfoView from './YoastInfoView';
import YoastInlineEditor from "./components/YoastInlineEditor";

manifest('Shel.Neos.YoastSeo:YoastInfoView', {}, globalRegistry => {
    const viewsRegistry = globalRegistry.get('inspector').get('views');
    const reducersRegistry = globalRegistry.get('reducers');

    viewsRegistry.set('Shel.Neos.YoastSeo/Inspector/Views/YoastInfoView', {
        component: YoastInfoView
    });

    reducersRegistry.set('yoast-seo', {reducer: reducer});

    const inlineEditorRegistry = globalRegistry.get('inlineEditors');
    const nodeTypesRegistry = globalRegistry.get('@neos-project/neos-ui-contentrepository');
    inlineEditorRegistry.set('Shel.Neos.YoastSeo:EditorEnvelope', {
        bootstrap: () => null,
        createInlineEditor: (options) => console.log(options, 'Creating yoast inline editor'),
        ToolbarComponent: () => null
    });
});
