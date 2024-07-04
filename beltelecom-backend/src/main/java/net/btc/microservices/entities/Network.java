package net.btc.microservices.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "networks")
public class Network {

    @JsonProperty("network")
    private String network;

    @Id
    @JsonProperty("url")
    private String url;

    public Network(String network, String url) {
        this.network = network;
        this.url = url;
    }

    public Network() {}

    public String getNetwork() {
        return this.network;
    }

    public void setNetwork(String network) {
        this.network = network;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
