( function() {
    var properties = [
        {
            name : 'width',
            value : 'w',
            propertySets: [ 'width' ],
            valueSets: [ 'percentage' ]
        },
        {
            name : 'min-width',
            value : 'w',
            propertySets: [ 'min-width' ],
            valueSets: [ 'percentage' ]
        },
        {
            name : 'max-width',
            value : 'w',
            propertySets: [ 'max-width' ],
            valueSets: [ 'percentage' ]
        },
        {
            name : 'height',
            value : 'h',
            propertySets: [ 'height' ],
            valueSets: [ 'percentage' ]
        },
        {
            name : 'min-height',
            value : 'h',
            propertySets: [ 'min-height' ],
            valueSets: [ 'percentage' ]
        },
        {
            name : 'max-height',
            value : 'h',
            propertySets: [ 'max-height' ],
            valueSets: [ 'percentage' ]
        },
        {
            name : 'margin',
            value : 'm',
            propertySets: [ 'trbl' ],
            valueSets: [ 'px', 'rem' ]
        },
        {
            name : 'border-color',
            value : 'bo',
            propertySets: [ 'color' ],
            valueSets: [ 'color' ]
        },
        {
            name : 'padding',
            value : 'p',
            propertySets: [ 'trbl' ],
            valueSets: [ 'px', 'rem' ]
        },
        {
            name : 'float',
            value : 'f',
            propertySets: [ 'float' ],
            valueSets: [ 'float' ]
        },
        {
            name : 'display',
            value : 'd',
            propertySets: [ 'display' ],
            valueSets: [ 'display' ]
        },
        {
            name : 'font-weight',
            value : 'fw',
            propertySets: [ 'font-weight' ],
            valueSets: [ 'font-weight' ]
        },
        {
            name : 'font-family',
            value : 'ff',
            propertySets: [ 'font-family' ],
            valueSets: [ 'font-family' ]
        },
        {
            name : 'color',
            value : '',
            propertySets: [ 'color' ],
            valueSets: [ 'color' ]
        },
        {
            name : 'background-color',
            value : 'bc',
            propertySets: [ 'color' ],
            valueSets: [ 'color' ]
        }
    ];

    var propertySets = [
        {
            name: 'width',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'min-width',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'max-width',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'height',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'min-height',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'max-height',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'trbl',
            values: [
                {
                    name: '', // Default is shorthand
                    value: ''
                },
                {
                    name: 't',
                    value: 'top'
                },
                {
                    name: 'r',
                    value: 'right'
                },
                {
                    name: 'b',
                    value: 'bottom'
                },
                {
                    name: 'l',
                    value: 'left'
                }
            ]
        },
        {
            name: 'float',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'display',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'font-weight',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'font-family',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        },
        {
            name: 'color',
            values: [
                {
                    name: '',
                    value: ''
                }
            ]
        }
    ];

    var valueSets = [
        {
            name: 'px',
            values: [
                {
                    name: '0',
                    value: '0'
                },
                {
                    name: '1',
                    value: '1px'
                },
                {
                    name: '2',
                    value: '2px'
                },
                {
                    name: '3',
                    value: '3px'
                },
                {
                    name: '4',
                    value: '4px'
                },
                {
                    name: '5',
                    value: '5px'
                }
            ]
        },
        {
            name: 'rem',
            values: [
                {
                    name: 'xxs',
                    value: '0.1rem'
                },
                {
                    name: 'xs',
                    value: '0.25rem'
                },
                {
                    name: 's',
                    value: '0.5rem'
                },
                {
                    name: '',
                    value: '1em'
                },
                {
                    name: 'l',
                    value: '2em'
                },
                {
                    name: 'xl',
                    value: '4em'
                },
                {
                    name: 'xxl',
                    value: '8em'
                }
            ]
        },
        {
            name: 'percentage',
            values: [
                {
                    name: '25p',
                    value: '25%'
                },
                {
                    name: '50p',
                    value: '50%'
                },
                {
                    name: '100p',
                    value: '100%'
                },
                {
                    name: '75p',
                    value: '75%'
                }
            ]
        },
        {
            name: 'float',
            values: [
                {
                    name: 'l',
                    value: 'left'
                },
                {
                    name: 'r',
                    value: 'right'
                },
                {
                    name: 'n',
                    value: 'none'
                },
                {
                    name: 'i',
                    value: 'inherit'
                }
            ]
        },
        {
            name: 'display',
            values: [
                {
                    name: 'b',
                    value: 'block'
                },
                {
                    name: 'i',
                    value: 'inline'
                },
                {
                    name: 'ib',
                    value: 'inline-block'
                },
                {
                    name: 't',
                    value: 'table'
                },
                {
                    name: 'tc',
                    value: 'table-cell'
                },
                {
                    name: 'n',
                    value: 'none'
                }
            ]
        },
        {
            name: 'color',
            values: [
                {
                    name: 'red',
                    value: 'red'
                },
                {
                    name: 'blue',
                    value: '#0cf'
                },
                {
                    name: 'green',
                    value: 'lime'
                },
                {
                    name: 'black',
                    value: '#111'
                },
                {
                    name: 'white',
                    value: '#fff'
                },
                {
                    name: 'currentcolor',
                    value: 'currentColor'
                }
            ]
        },
        {
            name: 'font-weight',
            values: [
                {
                    name: '1',
                    value: '100'
                },
                {
                    name: '2',
                    value: '200'
                },
                {
                    name: '3',
                    value: '300'
                },
                {
                    name: '4',
                    value: '400'
                },
                {
                    name: '5',
                    value: '500'
                },
                {
                    name: '6',
                    value: '600'
                },
                {
                    name: '7',
                    value: '700'
                },
                {
                    name: '8',
                    value: '800'
                },
                {
                    name: '9',
                    value: '900'
                }
            ]
        },
        {
            name: 'font-family',
            values: [
                {
                    name: '',
                    value: 'sans-serif'
                },
                {
                    name: 's',
                    value: 'serif'
                },
                {
                    name: 'm',
                    value: 'monospace'
                },
                {
                    name: 'f',
                    value: 'fantasy'
                },
                {
                    name: 'c',
                    value: 'cursive'
                }
            ]
        }
    ];

    var page = document.getElementsByTagName( 'html' )[0];
    var a, b, c, d, e, f;

    for ( a = 0; a < properties.length; a++ ) {
        var name = properties[a].name;
        var value = properties[a].value;
        var propSets = properties[a].propertySets;
        var valSets = properties[a].valueSets;

        // Print out base property titles
        var newTitle = document.createElement( 'h1' );
        var newName = document.createTextNode( name );
        var newHr = document.createElement( 'hr' );

        newTitle.appendChild( newName );
        page.appendChild( newTitle );
        page.appendChild( newHr );

        // Loop through property sets
        for ( b = 0; b < propertySets.length; b++ ) {
            var propSet = propSets[b];

            // TODO: Refactor (current assumption that 4 is the max number of property sets per property)
            if ( propSets[0] === propertySets[b].name || propSets[1] === propertySets[b].name || propSets[2] === propertySets[b].name || propSets[3] === propertySets[b].name ) {
                var propSetName = propertySets[b].name;

                // Loop through values in property sets
                for ( c = 0; c < propertySets[b].values.length; c++ ) {
                    var propSetNameValuesName = propertySets[b].values[c].name;
                    var propSetNameValuesValue = propertySets[b].values[c].value;

                    if ( propSetNameValuesValue !== '' ) {
                        var prettyProperty = name + '-' + propSetNameValuesValue;
                    } else {
                        var prettyProperty = name + propSetNameValuesValue;
                    }

                    // Loop through value sets
                    for ( d = 0; d < valueSets.length; d++ ) {
                        var valSet = valSets[d];

                        // TODO: Refactor (current assumption that 4 is the max number of value sets per property)
                        if ( valSets[0] === valueSets[d].name || valSets[1] === valueSets[d].name || valSets[2] === valueSets[d].name || valSets[3] === valueSets[d].name ) {
                            var valSetName = valueSets[d].name;

                            // Loop through values in value sets
                            for ( e = 0; e < valueSets[d].values.length; e++ ) {
                                var prettyValueClassPart = valueSets[d].values[e].name;
                                var prettyValue = valueSets[d].values[e].value;
                                var prettyClass = '.' + value + propSetNameValuesName +  prettyValueClassPart;
                                var prettyDeclaration = ' { ' + prettyProperty + ': ' + prettyValue + ' }';

                                page.innerHTML = page.innerHTML + prettyClass + prettyDeclaration;
                                page.appendChild( newHr );
                            }
                        }
                    }
                }
            }
        }
    }
})();
