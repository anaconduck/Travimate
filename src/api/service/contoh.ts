import travimate from "../travimate";

// Contoh misal ngambil api building

const APIBuildings = {
    async getAllBuilding() {
        try {
            const response = await travimate.get("/endpointnya disini");
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async createBuildings() {
        try {
            const response = await travimate.post("/endpointnya");
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async updateBuildings(data:any) {
        try {
            const id = data.id;
            const response = await travimate.patch(`/endpoint/:${id}`, data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async deleteBuildings(id:any) {
        try {
            const response = await travimate.delete(`/endpoint/:${id}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    //   Kalo misalkan ada yang lain tinggal tambahin disini
};

export default APIBuildings;