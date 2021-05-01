<template>
  <div>
      <!-- <v-card class="category">
        <v-container>
          <v-row>
            <v-col class=" d-flex flex-column title">
                <v-card-title>Cameras</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-img src="../assets/logo.png"></v-img>
                <v-card-actions>
                <v-btn>Listen Now</v-btn>
                </v-card-actions>
            </v-col>
            <v-col>
              <v-img src="../assets/logo.png"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card> -->
      <v-card> 
        <v-img id="image" src="../assets/logo.png" height="600"> 
          <v-card-title class="headline"> Search for <v-spacer></v-spacer>
            <span class="caption font-italic font-weight-light">yes</span>
          </v-card-title> 
        </v-img> 
      </v-card>
  </div>
</template>
<style lang="scss" scoped>
.category {
  width:500px;
  height: 100%;
  background-color: rgb(163, 211, 233);
  margin-left: 41%;
}
.title {
    width:50%;
    height: 30%;
}
</style>
<script>
export default {
    
}
</script>