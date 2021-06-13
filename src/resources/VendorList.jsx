import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const VendorList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="vendorName" />
            <TextField source="address1" />
            <TextField source="address2" />
            <TextField source="vendorCity" />
            <TextField source="vendorState" />
            <TextField source="vendorZipCode" />
            <TextField source="vendorPhone" />
            <TextField source="VendorContactLastName" />
            <TextField source="vendorContactFirstName" />
            <TextField source="defaultTermsId" />
            <TextField source="accountNumber" />
        </Datagrid>
    </List>
);