<template>
  <div>
    <div v-if="userInfo" style="text-align: center">
      <h2>Hey, {{ userInfo.user_info.first_name }}!</h2>
    </div>
  </div>
</template>

<script>
// import { toSnakeCase } from "@/utils";
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const userInfo = ref(null);

    const fetchUserInfo = async () => {
      const token = sessionStorage.getItem("session-token");
      if (!token) {
        console.error("No token found for this session");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/journals",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        userInfo.value = response.data;
        console.log(response);
        console.log(userInfo);
      } catch (error) {
        console.log("Error when retrieving user_info");
      }
    };

    onMounted(() => {
      fetchUserInfo();
    });

    return {
      userInfo,
    };
  },
};
</script>
