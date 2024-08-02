// schemas/experience.js
export default {
    name: 'experience',
    type: 'document',
    title: 'Experience',
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company Name',
        },
        {
            name: 'role',
            type: 'string',
            title: 'Role',
        },
        {
            name: 'startDate',
            type: 'date',
            title: 'Start Date',
        },
        {
            name: 'endDate',
            type: 'date',
            title: 'End Date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
        {
            name: 'companyLogo',
            type: 'image',
            title: 'Company Logo',
        },
        {
            name: 'techStack',
            type: 'array',
            title: 'Tech Stack',
            of: [{ type: 'image' }],
        },
        {
            name: 'responsibilities',
            type: 'array',
            title: 'Responsibilities',
            of: [{ type: 'string' }],
        },
    ],
};
