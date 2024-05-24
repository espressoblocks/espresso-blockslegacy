'use strict';

/**
 * espresso: String manipulation blocks, credit to rixthetyrunt and unsandboxed for some of them btw :D
 */

goog.provide('Blockly.Blocks.strings');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['strings_reverse'] = {
    /**
     * espresso: reverse characters in string
     */
    init: function(){
        this.jsonInit({
            "message0": "reverse %1", 
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                }
            ],
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_string"]
        });
    }
}

Blockly.Blocks['strings_repeat'] = {
    /**
     * espresso: repeat string multiple times
     */
    init: function(){
        this.jsonInit({
            "message0": "repeat %1 %2 times", 
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                },
                {
                    "type": "math_number",
                    "name": "AMOUNT"
                }
            ],
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_string"]
        });
    }
}

Blockly.Blocks['strings_split'] = {
    /**
     * espresso: split string then get the index blalblalbal idk how to explain
     */
    init: function(){
        this.jsonInit({
            "message0": "item %1 of %2 split by %3", 
            "args0": [
                {
                    "type": "input_value",
                    "name": "INDEX"
                },
                {
                    "type": "input_value",
                    "name": "TEXT"
                },
                {
                    "type": "input_value",
                    "name": "DELIMITER"
                }
            ],
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_string"]
        });
    }
}

Blockly.Blocks['strings_unequal'] = {
    /**
     * espresso: unused block because im really stupid
     */
    init: function(){
        this.jsonInit({
            "message0": "%1 not equal to %2", 
            "args0": [
                {
                    "type": "input_value",
                    "name": "STR1"
                },
                {
                    "type": "input_value",
                    "name": "STR2"
                }
            ],
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_boolean"]
        });
    }
}

Blockly.Blocks['strings_encode'] = {
    /**
     * espresso: block to encode a string with various methods
     */
    init: function(){
        this.jsonInit({
            "message0": "encode %1 with method %2", 
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                },
                {
                    "type": "field_dropdown",
                    "name": "METHOD",
                    "options": [
                        ["Base64", "BASE64"],
                        //["uuencode", "UUENCODE"], holy shit uuencode is weird
                        ["Base32", "BASE32"],
                        ["numbers", "NUMBER"],
                        ["URL", "URL"]
                    ]
                }
            ],
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_string"]
        });
    }
}

Blockly.Blocks['strings_decode'] = {
    /**
     * espresso: block to decode a string with various methods
     */
    init: function(){
        this.jsonInit({
            "message0": "decode %1 with method %2", 
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                },
                {
                    "type": "field_dropdown",
                    "name": "METHOD",
                    "options": [
                        ["Base64", "BASE64"],
                        //["uuencode", "UUENCODE"],
                        ["Base32", "BASE32"],
                        ["numbers", "NUMBER"],
                        ["URL", "URL"]
                    ]
                }
            ],
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_string"]
        });
    }
}

Blockly.Blocks['strings_random'] = {
    /**
     * espresso: block to get a random string
     */
    init: function(){
        this.jsonInit({
            "message0": "random string",
            "category": Blockly.Categories.strings,
            "extensions": ["colours_strings", "output_string"]
        });
    }
}

