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
}
