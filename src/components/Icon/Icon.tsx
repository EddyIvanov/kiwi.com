import React, { PureComponent, HTMLAttributes } from 'react';

import { IconPath } from './types';
import { StyledIcon } from './Icon.styled';
import { renderPaths } from './utils';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    svgPaths: IconPath[];
}

export class Icon extends PureComponent<IconProps> {
    render() {
        const { svgPaths, className = '', ...rest } = this.props;

        return (
            <StyledIcon
                dangerouslySetInnerHTML={{ __html: renderPaths(svgPaths) }}
                className="Icon"
                {...rest}
            />
        );
    }
};