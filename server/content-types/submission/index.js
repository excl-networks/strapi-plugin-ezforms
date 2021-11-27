module.exports = {
  info: {
    tableName: 'submission',
    singularName: 'submission', // kebab-case mandatory
    pluralName: 'submissions', // kebab-case mandatory
    displayName: 'Form Submissions',
    description: 'A Place for all your form submissions',
    kind: 'collectionType'
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: true
    },
    'content-type-builder': {
      visible: false
    }
  },
  attributes: {
    score: {
      type: 'string',
      min: 1,
      max: 50,
      configurable: false
    },
    data: {
      type: 'json',
      configurable: false
    }
  }
};
