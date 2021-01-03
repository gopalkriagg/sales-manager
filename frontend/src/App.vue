<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <!--  -->
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Frozen Products - Sales Manager</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({ drawer: null })
};
</script>
