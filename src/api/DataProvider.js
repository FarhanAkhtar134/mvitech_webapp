const dataProvider = {
    getList: async (resource, params) => {
        return await [
            {"firstname": "Muhammad Farhan", "lastname": "Akhtar"}
        ]
    },



    getOne:     (resource, params) => Promise,
    getMany:    (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create:     (resource, params) => Promise,
    update:     (resource, params) => Promise,
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,
}

export default dataProvider;