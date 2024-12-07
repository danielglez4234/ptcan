export const List = {
    /**
     * map obect key into an array
     */
    mapKeys: (array) => array.map(val => {
        if(typeof val === 'object'){
            return Object.keys(val)
        }
        return null
    }),
    /**
     * remove duplicates entries from array
     */
    uniqueKeys: (array) => array.reduce((res, itm) => {
        let result = res.find(item => JSON.stringify(item) === JSON.stringify(itm))
        if(!result) return res.concat(itm)
        return res
    }, []),
    /**
     * remove duplicates entries from array of object
     */
    uniqueObjectKeys: (array, objectKey) => {
        const uniqueIds = new Set()
        return array.filter(element => {
            const isDuplicate = uniqueIds.has(element[objectKey])
            uniqueIds.add(element[objectKey])

            if (!isDuplicate) return true
            return false
        })
    },
    /**
     * remove null and undefined entries
     */
    clean: (array) => array.filter(element => {
        return element !== undefined && element !== null
    }),
    /**
     * applay Set constructor rules to an array
     */
    applySetRules: (array) => {
        const newSet = new Set(array)
        return Array.from(newSet) 
    },
    /**
     * remove items from provided filter list
     */
    removeItemsFrom: (array, itemsToRemove) => {
        const arrange = array
        for (let i = 0; i < array.length; i++) {
            const index = array.indexOf(itemsToRemove[i])
            if(index !== -1)
                arrange.splice(index, 1)
        }
        return arrange
    },
    /**
     * add template to all elements of the array
     */
    startEndTemplate: (array, start, end) => {
        return array.map(item => 
            start + item + end
        )
    }
}