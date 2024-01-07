I understand that you want to turn the script from the given GitHub repository into a Termux command. Here are the steps to achieve that:

1. **Clone the Repository:**
   Open Termux and clone the repository using the following command:

   ```bash
   git clone https://github.com/adilali097/-Network-Information-Tool.git
   ```

2. **Navigate to the Repository:**
   Change to the directory of the cloned repository:

   ```bash
   cd -Network-Information-Tool
   ```

3. **Make the Script Executable:**
   Ensure that the script is executable:

   ```bash
   chmod +x networkInfo.js
   ```

4. **Move the Script to $PREFIX/bin:**
   Move the script to the `$PREFIX/bin` directory to make it a Termux command:

   ```bash
   mv networkInfo.js $PREFIX/bin/networkInfo
   ```

   If you encounter permission issues, you may need to use `mv networkInfo.js /data/data/com.termux/files/usr/bin/networkInfo` instead.

5. **Run the Command:**
   Now, you can run the command `networkInfo` from anywhere in Termux:

   ```bash
   networkInfo
   ```

This should execute the script and display information about your network interfaces within Termux. Make sure to adapt the steps based on the actual structure and requirements of the repository.
