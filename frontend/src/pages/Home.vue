<template>
    <v-data-table
        :headers="headers"
        :items="clients"
        :items-per-page="5"
        class="elevation-1"
    />
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: "Client",
                    align: "start",
                    value: "name"
                },
            ],
            clients: [
                {
                    name: "Ludhiana Client",
                },
                {
                    name: "Lollipop",
                },
                {
                    name: "Honeycomb",
                },
                {
                    name: "Donut",
                },
                {
                    name: "KitKat",
                }
            ]
        };
    }
};
</script>
