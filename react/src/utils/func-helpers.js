export default class FuncHelpers {
    static formatDate(dateStr) {
        // input formated in "2020-01-02";
        const date = new Date(dateStr);

        const options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
        };

        const formattedDate = date.toLocaleDateString("en-US", options);
        return formattedDate;
    }
}
