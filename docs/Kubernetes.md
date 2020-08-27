## Kubernetes
- I tried to use kubernetes, but I couldn't. I hoped to use free tier EC2 instance, 1 CPU, 1GB RAM, and I noticed that is not enough for minikuber requirement. So, I found alternate called [k3s](https://k3s.io/) which is lightweight kubernetes. Although I finally succeed to access my web page over a web browser, I figured out that server is still too small. It is not enough to run my web service. Though I failed to deploy my site by using kubernetes, I hope to describe how does it work.

### How did you design and execute?
- Install k3s
  - $ `curl -sfL https://get.k3s.io | sh -`
- Set disable features that will not used for me
  - $ `sudo vi /etc/systemd/system/k3s.service`
    - Change options at the very bottom.
    ```
    ExecStart=/usr/local/bin/k3s \
    server \
    '--write-kubeconfig-mode' \
    '644' \
    '--disable' \
    'coredns' \
    '--disable' \
    'servicelb' \
    '--disable' \
    'metrics-server'
    '--disable' \
    'traefik' \
    ```
- Reload daemon and restart k3s
  - $ `sudo systemctl daemon-reload`
  - $ `sudo systemctl restart k3s`

- Install nginx-ingress controller.
  - It handles inbound traffic to clusters.
  - I installed baremetal version nginx-ingress.
  - $ `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.34.1/deploy/static/provider/baremetal/deploy.yaml`
- Apply yaml files.
  - You can see this files in k8s directory.
  - $ `kubectl apply -f ingress.yaml`
  - $ `kubectl apply -f backend.yaml`
- Test a setting.
  - After applied all things, just type as follow.
  - $ `curl localhost`
  - $ `curl [Your IP]`
  - ¡Ø Note : your port 80 must be opened.