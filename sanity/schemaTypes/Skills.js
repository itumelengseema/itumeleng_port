/**
 * Schema definition for the Skills document in Sanity.
 *
 * @type {Object}
 * @property {string} name - The name of the document type.
 * @property {string} title - The title of the document type.
 * @property {string} type - The type of the document.
 * @property {Array<Object>} fields - The fields of the document.
 * @property {Object} fields[].name - The name of the skill.
 * @property {string} fields[].name.name - The name of the field.
 * @property {string} fields[].name.title - The title of the field.
 * @property {string} fields[].name.type - The type of the field.
 */
export default {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
    ],
};