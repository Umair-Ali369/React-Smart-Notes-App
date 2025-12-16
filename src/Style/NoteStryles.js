export const global = {
    pageHeading: "text-2xl font-bold md:text-4xl lg:6xl py-4 mx-4 dark:text-gray-200 text-gray-800"
}

export const header = {
    main : "flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100",
    div : "flex items-center gap-2",
    menuBtn : "p-2 md:hidden hover:bg-gray-100 rounded dark:hover:bg-gray-800",
    menuIcon: "text-3xl text-gray-700 dark:text-gray-200",
    logo : "text-lg md:text-2xl lg:text-3xl font-bold",
    themeToggleBtn : "text-gray-600 dark:text-gray-300",
    moonIcon : "text-3xl text-gray-700",
    sunIcon : "text-3xl text-yellow-400"
}

export const sideBar = {
    aside : "hidden md:block h-auto w-64 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 p-4",
    nav : "flex flex-col gap-3 md:fixed ",
    heading : "text-gray-800 px-4 py-2 mb-5 tex-2xl md:text-4xl dark:text-white font-bold",
    navLinks : `flex items-center text-xl gap-2 px-4 py-3 rounded-lg transition-colors  dark:text-gray-200 `
}

export const noteFrom = {
    form : "lg:w-full md:w-[90%] mx-auto  flex flex-col gap-3 px-2 py-4",
    title : "px-4 py-2 rounded-lg bg-gray-50 shadow-md border w-full outline-none dark:bg-gray-500 text-gray-800 dark:text-white",
    content : "px-4 py-2 rounded-lg shadow-md bg-gray-50 border w-full outline-none dark:bg-gray-500 text-gray-800 dark:text-white",
    addBtn : "px-5 py-3 text-white bg-blue-500 font-bold hover:bg-blue-700 rounded-md w-full text-center"
}

export const noteCard = {
    main : "flex flex-col items-center justify-center border p-4 m-2 bg-white rounded-xl shadow-sm dark:bg-gray-700 w-full",
    noteTitle : "text-xl text-gray-800 dark:text-gray-200 md:text-2xl md:font-bold font-semibold mb-2",
    noteContent : "text-sm md:text-xl text-center dark:text-gray-300 text-gray-600 mb-2",
    noteDate : "text-right text-gray-400 text-[15px] py-3",
    btnDev : "flex gap-3 items-center justify-between",
    favoriteBtn : "text-2xl md:text-5xl rounded-md px-2.5 md:px-4 py-0.5 md:py-1 ",
    restoreBtn : "bg-red-500 text-white hover:bg-red-600 rounded-md  px-2 md:px-4 py-1 md:py-2.5 transition-colors",
    editBtn : "md:text-xl  rounded-md px-2 md:px-4 py-1 md:py-2.5 bg-green-500 text-white hover:bg-green-600",
    delete : "md:text-xl  rounded-md px-2 md:px-4 py-1 md:py-2.5 bg-red-500 text-white hover:bg-red-600",
    deletePermenent : "bg-green-500 text-white hover:bg-green-600 rounded-md px-2 md:px-4 py-1 md:py-2.5 transition-colors",
}

export const noteList = {
    noNotes : "text-gray-800 dark:text-gray-200 text-xl font-semibold text-center py-4",
    notesGrid : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2"
}

export const editPanel = {
    mainSection : "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
    mianDiv : "bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl mx-4",
    form : " mx-auto  flex flex-col gap-3 px-2 py-4",
    title : "px-4 py-2 rounded-lg w-full outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-colors",
    content : "px-4 py-2 rounded-lg  w-full outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-colors",
    btnDiv : "flex items-center justify-center gap-4 flex-row-reverse",
    saveBtn : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-md px-4 py-2 transition-colors",
    cancelBtn : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 rounded-md px-4 py-2 transition-colors"
}