export class FuncHelper {
    static getAddedOnDate(pDate) {
        const date = new Date(pDate);
        const options = { month: "long", day: "numeric" };
        const formattedDate = `Added on ${date.toLocaleDateString(
            "en-US",
            options
        )}`;
        return formattedDate;
    }

    static getCleanServerImageUrl(url) {
        return url
            ? `${import.meta.env.VITE_SERVER_URL}/storage/${url}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1UU-9fy5fPAMrlsO9QmqcuAV5i65SBRDD4dTHS8kG9zD6U6piqsZFm7wyTC399RljYI&usqp=CAU";
    }
}
