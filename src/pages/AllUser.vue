<template>
    <ag-grid-vue style="width: 100%; height: 500px;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 :gridOptions="gridOptions"
                 :frameworkComponents="frameworkComponents"
                 :rowData="rowData">
    </ag-grid-vue>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import BtnCellRenderer from "../components/BtnAgGrid";

    export default {
        name: 'AllUSer',
        data() {
            return {
                columnDefs: null,
                rowData: null,
                gridOptions: null,
                frameworkComponents: null,
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {

            this.rowData = (localStorage.allUser == undefined) ? null : JSON.parse(localStorage.allUser)

            this.gridOptions = {
                enableCharts: true,
                defaultColDef: {
                    sortable: true,
                    filter: true,
                    resizable: true,
                    filterParams: {
                        buttons: ["apply", "reset"],
                    },
                },
                columnTypes: {
                    dimension: {
                        enableRowGroup: true,
                        enablePivot: true,
                    },
                },
                rowGroupPanelShow: "always",
                rowData: null,
                suppressAggFuncInHeader: true,
                //localeText: AG_GRID_LOCALE_RU,
                colResizeDefault: "shift",
                enableRangeSelection: true,
            };
            this.columnDefs = [
                {
                    field: 'surname', headerName: 'Фамилия', filter: true,
                    type: "dimension",
                },
                {
                    field: 'name', headerName: 'Имя', filter: true,
                    type: "dimension",
                },
                {
                    field: 'patronymic', headerName: 'Отчество', filter: true,
                    type: "dimension",
                },
                {
                    field: 'date_of_birth', headerName: 'Дата рождения', filter: true,
                    type: "dimension",
                },
                {
                    field: 'date_employment', headerName: 'Дата приема на работу', filter: true,
                    type: "dimension",
                },
                {
                    field: 'date_of_dismissal', headerName: 'Дата увольнения', filter: true,
                    type: "dimension",
                },
                {
                    field: 'gender', headerName: 'Пол', filter: true,
                    type: "dimension",
                },
                {
                    field: 'position', headerName: 'Должность', filter: true,
                    type: "dimension",
                },
                {
                    field: 'rights', headerName: 'Права', filter: true,
                    type: "dimension",
                },
                {
                    headerName: "",
                    field: "id",
                    cellRenderer: "btnCellRenderer",
                    cellRendererParams: {
                        changeTask: function (id) {
                            location.href = location.href + 'edit/' + id
                        },
                        del: function (id) {
                            let x = (JSON.parse(localStorage.allUser))
                            for (let i = 0; i < x.length; i++) {
                                if (x[i].id === id) {
                                    x.splice(i, 1)
                                    localStorage.allUser = JSON.stringify(x)
                                    location.reload()
                                }
                            }
                        },
                    },
                },
            ];
            this.frameworkComponents = {
                btnCellRenderer: BtnCellRenderer,
            };
        }
    }
</script>