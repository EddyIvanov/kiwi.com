import { IconPath } from './types';

export const renderPaths = (iconPaths: IconPath[]) => {
    return `<svg viewBox="0 0 32 32">${iconPaths.map(path => renderSinglePath(path)).join('')}</svg>`
};

const renderSinglePath = (data: IconPath): string => {
    if (typeof data === 'string') {
        return `<path d="${data}"></path>`;
    }
    if (Array.isArray(data) && data.length === 2) {
        const [color, path] = data;
        return `<path fill="${color}" d="${path}"></path>`;
    }

    return '';
};