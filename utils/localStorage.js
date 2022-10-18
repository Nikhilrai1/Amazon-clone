export const useLocalStorage = () => {

    const setValueInLocalStorage = (stateName, value) => {
        localStorage.setItem(stateName, JSON.stringify(value))
    }

    const getValueFromLocalStorage = (stateName) => {
        return JSON.parse(localStorage.getItem(stateName));
    }

    return { setValueInLocalStorage, getValueFromLocalStorage };
}