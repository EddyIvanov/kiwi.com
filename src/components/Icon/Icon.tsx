import React, { PureComponent, HTMLAttributes } from 'react';
import { IconPath } from './types';
import { renderPaths } from './utils/renderPaths';
import StyledIcon from './styled';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    svgPaths: IconPath[];
}

export class Icon extends PureComponent<IconProps> {
    render() {
        const { svgPaths, ...rest } = this.props;

        return (
            <StyledIcon
                dangerouslySetInnerHTML={{ __html: renderPaths(svgPaths) }}
                className="Icon"
                {...rest}
            />
        );
    }
};