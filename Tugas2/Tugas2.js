const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    const search = "an";
    let data = name.filter( x => searchNames(x, search));
    data = data.slice(0,3)
    
    console.log("Hasil Pencarian",data);

    function searchNames(name, search) {
        const chars = Array.from(search);
        let beta = true;
        for (let i in chars) {
            const c = chars[i];
            beta &&= name.toLowerCase().includes(c)
        }
        return beta
    }