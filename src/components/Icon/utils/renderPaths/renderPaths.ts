import { IconPath } from '../../types';

export const renderPaths = (iconPaths: IconPath[]) => {
    return `<svg viewBox="0 0 32 32">${iconPaths.map(path => renderSinglePath(path)).join('')}</svg>`
};

const renderSinglePath = (data: IconPath): string => {
    return `<path d="${data}"></path>`;
};