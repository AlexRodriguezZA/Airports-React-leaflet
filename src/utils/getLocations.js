export const getLocations = async () => {
    const res = await fetch("http://localhost:3000/getLocations")
    const locations = await res.json()
    return locations.data;
}