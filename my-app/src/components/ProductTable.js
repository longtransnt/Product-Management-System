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
    const { SearchBar, ClearSearchButton } = Search;
    const [itemList, setItemList] = useState([]);
    const [fetch,setFetch] = useState(true);
    const columns = [
        {dataField: 'id', text: "ID", sort: true, searchable: false},
        {dataField: 'name', text: "Name", sort: true },
        {dataField: 'description', text: "Description", sort: true },
        {dataField: 'catID', text: "Category", searchable: true, formatter: (cell, row) => myConst.CATEGORIES_LIST[cell]},
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: 'Last',
        firstPageText: 'First',
        nextPageText: 'Next',
        prePageText: 'Previous',
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
            data={itemList}
            columns={columns}
            srText= "Enter name of Items you want to search"
            search={{
                searchFormatted: true
            }}
        >
            {
                props => (
                    <div 
                        class="container d-flex justify-content-center align-items-center"
                        id="container"
                    >
                        <div class="col-l-4 col-md-12">
                            <div class="bg-white rounded shadow-5-strong p-5">
                                <h2>List Of All Items Available</h2>
                                <div class="searchbar">
                                    <SearchBar { ...props.searchProps } /> 
                                    <ClearSearchButton { ...props.searchProps } />
                                </div>
                                <div>
                                    <BootstrapTable 
                                        pagination={pagination}
                                        {...props.baseProps}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </ToolkitProvider>
    );
};

export default ProductTable;