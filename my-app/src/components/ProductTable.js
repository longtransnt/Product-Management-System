import React, {useEffect, useState} from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import ProductService from './ProductService';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import * as myConst from './Constants'

const ProductTable = () => {
    const { SearchBar } = Search;
    const [itemList, setItemList] = useState([]);
    const [fetch,setFetch] = useState(true);
    const columns = [
        {dataField: 'id', text: "ID", sort: true, searchable: false},
        {dataField: 'name', text: "Name", sort: true },
        {dataField: 'catID', text: "Category", searchable: false, formatter: (cell, row) => myConst.CATEGORIES_LIST[cell]},
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '=>',
        prePageText: '<=',
        showTotal: true,
        alwaysShowAllBtns: true,
        hideSizePerPage: true
    });

    useEffect(() => {
        const getProducts = async () => {
            console.log(myConst.CATEGORIES_LIST);
            const res = await ProductService.getAllProducts();
            setItemList(res.data);
        }
        if (fetch){
            getProducts()
                .catch(error => console.log(error));
        }
    }, []);

    return (
        <ToolkitProvider
            keyField="id"
            pagination={pagination}
            srText= "Enter name of Items you want to search"
            data={itemList}
            columns={columns}
            search={ {
                searchFormatted: true
            } }

        >
            {
                props => (
                    <div>
                        <SearchBar { ...props.searchProps } />
                        <BootstrapTable {...props.baseProps}/>
                    </div>
                )
            }
        </ToolkitProvider>
    );
};

export default ProductTable;