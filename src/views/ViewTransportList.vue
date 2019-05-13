<template>
    <div>
        <div>Transports List</div>
        <div class="table transport">
            <table>
                <tr>
                    <th class="number">#</th>
                    <th class="transport">
                        <button type="button" class="icon-button"><img class="icon" src="../assets/bus.svg"></button>
                        <button type="button" class="icon-button"><img class="icon" src="../assets/subway.svg"></button>
                        <button type="button" class="icon-button"><img class="icon" src="../assets/tram.svg"></button>
                    </th>
                    <th class="router">Router Filter</th>
                    <th class="seats">Seats</th>
                    <th class="edit">Edit</th>
                </tr>
                <tr v-for="(item,index) in transport">
                    <td>{{index+1}}</td>
                    <td>{{item.transportStops}}</td>
                    <td>{{item.seats}}</td>
                    <td>
                        <button type="button" class="icon-button"><img class="icon" src="../assets/pen.svg"></button>
                        <button type="button" class="icon-button"><img class="icon" src="../assets/trash.svg"></button>
                    </td>
                </tr>
            </table>
            <div class="pagination">
                <div class="cell"><img class="icon-pagination" src="../assets/angle-double-left.svg"></div>
                <div class="cell">1</div>
                <div class="cell">2</div>
                <div class="cell">3</div>
                <div class="cell">4</div>
                <div class="cell">5</div>
                <div class="cell"><img class="icon-pagination" src="../assets/angle-double-right.svg"></div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

    import {ITransportList} from '../common/interface/ITransportList';

    interface RouteData {
        seats: ITransportList[];
    }


    export default {
        name: "ViewTransportList",
        data(): RouteData {
            return {
                seats: [
                    {
                        transportStops: '1B',
                        seats: '23',
                    },
                    {
                        transportStops: '2B',
                        seats: '30',
                    },
                    {
                        transportStops: '4B',
                        seats: '12',
                    },
                    {
                        transportStops: '5B',
                        seats: '60',
                    },
                    {
                        transportStops: '7B',
                        seats: '34',
                    },
                    {
                        transportStops: '8B',
                        seats: '54',
                    },
                    {
                        transportStops: '5B',
                        seats: '34',
                    },
                    {
                        transportStops: '01B',
                        seats: '34',
                    },
                    {
                        transportStops: '9B',
                        seats: '21',
                    },

                ],
            };
        }
    }


</script>

<style scoped>

    table {
        min-width: 300px;
        width: 100%;
    }

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    tr:nth-child(even) {
        background-color: #e6e6e6;
    }


    th, td {
        padding: 5px 20px;
        text-align: center;
    }

    th {
        background-color: #346ee6;
    }

    .number {
        width: 2.5em;
    }

    .edit {
        width: 150px;
    }

    .table {
        margin: 0 auto;
        max-width: 1000px;
    }

    .icon {
        width: 20px;
        vertical-align: middle;
    }

    .icon-button {

        padding: 10px 10px;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
        text-align: center;
        border: none;
        background: transparent;
    }

    .icon-pagination {
        width: 0.5em;
    }

    .pagination {
        margin-top: 20px;
    }

    .cell {
        border: 1px solid black;
        display: inline-block;
        padding: 15px 20px;
        border-right: 0px;

    }

    .cell:hover {
        background-color: #e6e6e6;
        cursor: pointer;

    }

    .cell:last-child {
        border-right: 1px solid black;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .cell:first-child {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }


</style>
