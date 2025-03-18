

export const ROLES = {
    ADMIN: 'admin',
    MSHP: 'mshp',
    BELPLEM: 'belplem',
    GPP: 'gpp',
    MILK_LAB: 'milkLab',
    GENETIC_LAB: 'geneticLab',
    COMMODITY_FARM: 'commodityFarm',
    BREEDING_FARM: 'breedingFarm',
    BREEDING_PLANT: 'breedingPlant',
}

export const hasAccess = (userRole: string, allowedRoles: string[]) => {
    return allowedRoles.includes(userRole)
}