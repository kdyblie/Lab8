import { pushToHistory, sum } from '../scripts/router.js';
/**
 * @jest-environment jsdom
 */

describe('setting branch', () => {
    test('Test the current state object', () => {
        history = pushToHistory('settings');
        expect(history.state.page).toBe('settings');
    });

    test('Test length of the history stack', () => {
        expect(history.length).toBe(2);
    });
});

describe('entry brach', () => {
    test('Test the current state object', () => {
        history = pushToHistory('entry', 10);
        expect(history.state.page).toBe('entry10');
    });

    test('Test length of the history stack', () => {
        expect(history.length).toBe(3);
    });
});

describe('default branch', () => {
    test('Test the current state object', () => {
        history = pushToHistory();
        expect(history.state.page).toBe();
    });

    test('Test length of the history stack', () => {
        expect(history.length).toBe(4);
    });
});