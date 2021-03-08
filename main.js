( async function main() {
    // alert('MEW PEW');

    const sidebarSelector = '#columns > #secondary'

    const getSidebar = async () => {
        const getSidebarElem = () => document.querySelector(sidebarSelector);

        function checkAfter2Seconds() {
            const sidebar = getSidebarElem();
            if(!(sidebar instanceof HTMLDivElement)) {
                console.log('returning promise')
                return new Promise(resolve => {
                    setTimeout(async () => {
                        await resolve(getSidebar());
                    }, 3000);
                });
            }else{
                console.log('returning BARRR')
                return sidebar;
            }
        }

        const sidebar = getSidebarElem();
        console.log('logging type UPPER')
        console.log(sidebar instanceof HTMLDivElement);

        if(!(sidebar instanceof HTMLDivElement)) {
            return await checkAfter2Seconds();
        }else{
            console.log('bar not NULLLLLLLL')
            console.log(sidebar instanceof HTMLDivElement);
            console.log('sBAR',sidebar)

            return sidebar;
        }
    }

    await getSidebar().then((sidebar)=>{
        console.log('FINAL SIDEBAR', sidebar)
        sidebar.style.cssText = "position: fixed;\n" +
            "    right: 0;\n" +
            "    overflow-y: scroll;\n" +
            "    height: 700px;\n" +
            "    width: 200px;";
    });


})();

