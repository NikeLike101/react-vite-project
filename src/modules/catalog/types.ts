
export type ProductsFilterType = {
    material: string | undefined,
    searchField: string,
    name: string | undefined
}


export type ProductType = {id: number, name: string, isChecked: boolean, userId: number}

export type ProductWithUserType = Omit<ProductType, 'userId'> & {user: UserType}

export type UserType = {id: number, name: string, username:string,
phone: string, email:string}