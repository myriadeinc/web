const data = {
  "api": {
      "id": null,
      "worker-id": null
  },
  "http": {
      "enabled": true,
      "host": "127.0.0.1",
      "port": 0,
      "access-token": null,
      "restricted": true
  },
  "autosave": true,
  "background": false,
  "colors": true,
  "randomx": {
      "init": -1,
      "numa": true
  },
  "cpu": {
      "enabled": true,
      "huge-pages": true,
      "hw-aes": null,
      "priority": null,
      "memory-pool": false,
      "asm": true,
      "argon2-impl": null,
      "argon2": [0, 1, 2, 3],
      "cn": [
          [1, 0],
          [1, 2]
      ],
      "cn-heavy": [
          [1, 0]
      ],
      "cn-lite": [
          [1, 0],
          [1, 1],
          [1, 2],
          [1, 3]
      ],
      "cn-pico": [
          [2, 0],
          [2, 1],
          [2, 2],
          [2, 3]
      ],
      "cn/gpu": [0, 1, 2, 3],
      "rx": [0, 2],
      "rx/wow": [0, 1, 2, 3],
      "cn/0": false,
      "cn-lite/0": false,
      "rx/arq": "rx/wow"
  },
  "opencl": {
      "enabled": false,
      "cache": true,
      "loader": null,
      "platform": "AMD",
      "cn/0": false,
      "cn-lite/0": false
  },
  "cuda": {
      "enabled": false,
      "loader": null,
      "nvml": true,
      "cn/0": false,
      "cn-lite/0": false
  },
  "donate-level": 0,
  "donate-over-proxy": 1,
  "log-file": null,
  "pools": [
      {
          "algo": "rx/0",
          "coin": "monero",
          "url": "__REPLACE__",
          "user": "__REPLACE__",
          "pass": "__REPLACE__",
          "rig-id": null,
          "nicehash": false,
          "keepalive": true,
          "enabled": true,
          "tls": false,
          "tls-fingerprint": null,
          "daemon": false,
          "self-select": null
      }
  ],
  "print-time": 60,
  "health-print-time": 60,
  "retries": 5,
  "retry-pause": 5,
  "syslog": false,
  "user-agent": null,
  "watch": true
}

export default data;