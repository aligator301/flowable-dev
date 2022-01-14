const Config = require('../config/');
const pako = require('pako');

/*
function getState() {
    let state = {};

    try {
        if (window.__PRELOADED_STATE__ !== undefined && window.__PRELOADED_STATE__ !== null) {
            state = JSON.parse( window.atob(window.__PRELOADED_STATE__) );
            //console.log('initialState', state);
            delete state.StoreURL;
            delete window.__PRELOADED_STATE__;
        }

        if (typeof(Storage) !== "undefined" && window.localStorage.getItem(Config.LOCAL_STORE_NAME) !== undefined && window.localStorage.getItem(Config.LOCAL_STORE_NAME) !== null) {
            let storedState = JSON.parse(
                decompress(window.localStorage.getItem(Config.LOCAL_STORE_NAME))
            );

            if (storedState !== undefined && storedState !== null && storedState.StateTimestamp !== undefined && storedState.StateTimestamp.UpdateTS !== undefined) {
                // get JWT from local storage
                if (storedState.Authorisation !== undefined && storedState.Authorisation.SKUAuthenticationToken !== undefined && storedState.Authorisation.SKUAuthenticationToken !== null) {
                    //console.log('storedState.Authorisation.SKUAuthenticationToken', storedState.Authorisation.SKUAuthenticationToken);
                    let storedAuth = parseJwt(storedState.Authorisation.SKUAuthenticationToken);
                    // Authorisation.SKUAuthenticationToken
                    // get JWT from fastify
                    let fastifyAuth = parseJwt(state.Authorisation.SKUAuthenticationToken);

                    //console.log('storedAuth', storedAuth);
                    //console.log('fastifyAuth', fastifyAuth);

                    if (!isUserIdentical(storedAuth, fastifyAuth)) {
                        return state; // return new state
                    }

                    if (hasTokenExpired(storedAuth)) { // still only checking the exp of the stored token. We Assume that any new token is valid
                        return state; // return new state
                    }

                    let ageOfStoreInSeconds = (Date.now() - storedState.StateTimestamp.UpdateTS)/1000;
                    console.log('State store in HTML5 is', ageOfStoreInSeconds, 'Seconds old');
                    if (ageOfStoreInSeconds < (4 * 60 * 60)) {
                        console.log('inflating state from store');
                        return ensureStorePathCorrect(storedState, state);
                    }
                    console.log('using new state store');
                } else if (state.Authorisation !== undefined && state.Authorisation.SKUAuthenticationToken !== undefined && state.Authorisation.SKUAuthenticationToken !== null) {
                    return state; // The previous copy has no auth but this does, return new one
                } else { // return stored state if it isn't too old.
                    let ageOfStoreInSeconds = (Date.now() - storedState.StateTimestamp.UpdateTS)/1000;
                    console.log('State store in HTML5 is', ageOfStoreInSeconds, 'Seconds old');
                    if (ageOfStoreInSeconds < (4 * 60 * 60)) {
                        console.log('inflating state from store');
                        return ensureStorePathCorrect(storedState, state);
                    }
                    console.log('using new state store');
                }
            }

        }

    } catch (ERR) {
        console.log('Error while trying to parse LocalStore state: \'', ERR, '\' Will continue with state from Fastify');
    }

    return state;
}

function ensureStorePathCorrect(store, newState) {
    store.View.Current = Object.assign({}, newState.View.Current);
    return store;
}

function isUserIdentical(state1, state2) {
    return state1!==undefined&&state2!==undefined&&state1.sub===state2.sub;
}

function hasTokenExpired(state) {
    if ((state.exp * 1000) > Date.now()) {
        return false;
    }
    console.log('Your credentials expired', (( Date.now() - (state.exp * 1000))/1000), 'seconds ago');
    return true;
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function setState(state) {
    try {
        if (typeof(Storage) !== "undefined") {
            window.localStorage.setItem(Config.LOCAL_STORE_NAME,
                compress(state)
            );
        }
    } catch (ERR) {
        console.log('ERROR in setting state on local storage', ERR);
    }
}

function stateChangeListener(store) {
    return function() {
        setState(JSON.stringify(store.getState()));
    };
}

function compress(input) {
    return pako.gzip(input);
}

function decompress(input) {
    if (input!==undefined && input !== null) {
        //console.log('stored data', input, ' --- ', window.atob(input), ' --- ');
        //console.log(pako.ungzip(window.atob(input), { to: 'string' }));
        //console.log('stored data', input, ' --- ', new Uint8Array((input).split(',')), ' --- ');
        return pako.ungzip(  new Uint8Array((input).split(',')), { to: 'string' } );
    }
    return input;
}
*/

module.exports = {
    getState : () => { return {}; },
    setState : (state) => {},
    subscribe : (storeSubscriber) => {
        storeSubscriber((store) => {
            console.log('Store Updated');
        });
    }
};
