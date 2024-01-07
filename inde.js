const os = require('os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();
  const result = {};

  for (const [iface, details] of Object.entries(networkInterfaces)) {
    result[iface] = details.map(info => ({
      address: info.address,
      netmask: info.netmask,
      mac: info.mac,
      internal: info.internal,
      family: info.family,
    }));
  }

  return result;
}

const networkInfo = getNetworkInfo();

console.log('Network Information:');
for (const [iface, details] of Object.entries(networkInfo)) {
  console.log(`\nInterface: ${iface}`);
  details.forEach((info, index) => {
    console.log(`  ${index + 1}. Address: ${info.address}`);
    console.log(`     Netmask: ${info.netmask}`);
    console.log(`     MAC: ${info.mac}`);
    console.log(`     Internal: ${info.internal}`);
    console.log(`     Family: ${info.family}`);
  });
}
