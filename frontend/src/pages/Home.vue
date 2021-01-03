<template>
    <v-card width="800">
        <v-card-title>
            <v-row>
                <v-col cols="2">
                    <v-btn color="primary">
                        Add Client
                    </v-btn>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="clients"
            :items-per-page="5"
            :search="search"
            class="elevation-1"
        />
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            headers: [
                {
                    text: "Client",
                    align: "start",
                    value: "name"
                }
            ],
            clients: [
                {
                    name: "Ludhiana Client"
                },
                {
                    name: "Lollipop"
                },
                {
                    name: "Honeycomb"
                },
                {
                    name: "Donut"
                },
                {
                    name: "KitKat"
                }
            ]
        };
    }
};
</script>
