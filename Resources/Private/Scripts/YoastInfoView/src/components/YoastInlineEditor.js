import React, {PureComponent} from 'react';
import {$transform} from "plow-js";
import {connect} from 'react-redux';

import {selectors} from "@neos-project/neos-ui-redux-store";
import {neos} from "@neos-project/neos-ui-decorators";

@connect($transform({
    focusedNodeType: selectors.CR.Nodes.focusedNodeTypeSelector,
    currentlyEditedPropertyName: selectors.UI.ContentCanvas.currentlyEditedPropertyName,
}))
@neos(globalRegistry => ({
    nodeTypesRegistry: globalRegistry.get('@neos-project/neos-ui-contentrepository')
}))
export default class EditorToolbar extends PureComponent {
    render() {
        return (
            <div className="yoast-inline-editor">
                This is the yoast inline editor
            </div>
        );
    }
}
